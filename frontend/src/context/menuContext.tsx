// import React, { createContext, useEffect, useState } from "react";
// import axios from "axios";


// type MenuItem = {
//   menuroleid: number;
//   menuName: string;
//   children?: MenuItem[];
//   subMenus?: MenuItem[];
// };

// type MenuContextType = {
//   menuItems: MenuItem[];
//   activeMenuItem: MenuItem | null;
//   setActiveMenuItem: (item: MenuItem) => void;
// };

// const MenuContext = createContext<MenuContextType | undefined>(undefined);

// // Utility to normalize nested menus
// const normalizeMenu = (menu: MenuItem[]): MenuItem[] =>
//   menu.map((item) => ({
//     ...item,
//     subMenus: item.children?.length ? normalizeMenu(item.children) : [],
//   }));

// export const MenuProvider = ({ children }: { children: React.ReactNode }) => {
//   const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
//   const [activeMenuItem, setActiveMenuItem] = useState<MenuItem | null>(null);

//   useEffect(() => {
//     const fetchMenu = async () => {
//       const token = localStorage.getItem("accessToken");
//       if (!token) return;

//       try {
//         // const decoded: any = jwtDecode(token);
//         // const roleId = decoded?.roleid;
//         const baseUrl = import.meta.env.VITE_BASE_URL;

//         const response = await axios.get(`${baseUrl}/api/MenuRoleMapping/MenuList/${roleId}`, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         if (response.data.isSuccess) {
//           const normalized = normalizeMenu(response.data.data);
//           setMenuItems(normalized);
//         }
//       } catch (error) {
//         console.error("Failed to fetch menu:", error);
//       }
//     };

//     fetchMenu();
//   }, []);

//   return (
//     <MenuContext.Provider value={{ menuItems, activeMenuItem, setActiveMenuItem }}>
//       {children}
//     </MenuContext.Provider>
//   );
// };

// // Custom hook moved to separate file for Fast Refresh compatibility
// // See useMenu.ts for the hook implementation.
