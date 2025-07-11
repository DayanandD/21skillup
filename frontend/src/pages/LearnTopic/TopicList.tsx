import { useEffect, useState } from "react";
import { getTopics } from "./useTopicHooks";
import { Card, CardContent, Typography, Grid } from "@mui/material";

interface Topic {
  topicId: number;
  title: string;
  description: string;
}

export default function TopicList() {
  const [topics, setTopics] = useState<Topic[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getTopics();
        setTopics(res.data);
      } catch (error) {
        console.error("Error fetching topics", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Typography variant="h5" gutterBottom>Topics</Typography>
      <Grid container spacing={2}>
        {topics.map((topic) => (
          <Grid item xs={12} sm={6} md={4} key={topic.topicId}>
            <Card>
              <CardContent>
                <Typography variant="h6">{topic.title}</Typography>
                <Typography variant="body2">{topic.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
