/* eslint-disable react/prop-types */
import styles from "../styles/TabsComponent.module.css";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const TabsComponent = ({ handleTabChange, value, categories }) => {
  return (
    <div className={styles.tabsWrp}>
      <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
        <Tabs
          value={value}
          onChange={handleTabChange}
          variant="scrollable"
          // scrollButtons="auto"
          scrollButtons
          allowScrollButtonsMobile
        >
          {categories.map((category, index) => (
            <Tab key={index} label={category} />
          ))}
        </Tabs>
      </Box>
    </div>
  );
};

export default TabsComponent;
