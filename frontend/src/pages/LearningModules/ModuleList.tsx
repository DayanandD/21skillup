import { useEffect, useState } from "react";
import { getModules } from "./useModuleHooks";
import { Card, CardContent, Typography, Grid } from "@mui/material";

interface Module {
  moduleId: number;
  title: string;
  description: string;
}

export default function ModuleList() {
  const [modules, setModules] = useState<Module[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getModules();
        console.log("getModules response:", res);
        let data: Module[] = [];
        if (typeof res.data === "string") {
          // Try to parse only the top-level array, ignoring nested fields
          const parsed = JSON.parse(res.data, (key, value) => {
            // Remove nested 'module' fields to break the circular reference
            if (key === "module") return undefined;
            return value;
          });
          data = Array.isArray(parsed)
            ? parsed.map((m) => ({
                moduleId: m.moduleId,
                title: m.title,
                description: m.description,
              }))
            : [];
        } else if (Array.isArray(res.data)) {
          data = res.data;
        }
        setModules(data);
      } catch (error) {
        console.error("Error fetching modules", error);
        setModules([]);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Typography variant="h5" gutterBottom>Modules</Typography>
      <Grid container spacing={2}>
        {modules.map((module) => (
          <Grid item xs={12} sm={6} md={4} key={module.moduleId}>
            <Card>
              <CardContent>
                <Typography variant="h6">{module.title}</Typography>
                <Typography variant="body2">{module.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
