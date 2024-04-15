"use client";
import React, { useEffect, useState } from "react";
import Graph from "@/components/panel/Graph";
import GridLayout from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/data-table";


interface Panel {
  id: string | number;
  name: string;
  data: any; // Consider defining a more specific type for your panel data
  showGraph?: boolean;
}

const Dashboards = () => {
  const [savedPanels, setSavedPanels] = useState<any[]>([]);
  const [selectedPanel, setSelectedPanel] = useState<Panel | null>(null);

  useEffect(() => {
    loadSavedPanels();
  }, []);

  const loadSavedPanels = () => {
    const savedPanelsData = localStorage.getItem("savedPanels");
    if (savedPanelsData) {
      const parsedSavedPanels = JSON.parse(savedPanelsData);
      const panelsArray: Panel[] = (
        Object.values(parsedSavedPanels) as Panel[]
      ).map((panel) => ({
        ...panel,
        showGraph: true, // TypeScript now knows `panel` is an object type
      }));

      setSavedPanels(panelsArray);
    }
  };

  const toggleDisplay = (panelId: string | number) => {
    setSavedPanels((prevPanels) =>
      prevPanels.map((panel) =>
        panel.id === panelId ? { ...panel, showGraph: !panel.showGraph } : panel
      )
    );
  };

  const deletePanel = (panelId: string | number) => {
    const savedPanelsData = localStorage.getItem("savedPanels");
    if (savedPanelsData) {
      const panels = JSON.parse(savedPanelsData);
      delete panels[panelId];
      localStorage.setItem("savedPanels", JSON.stringify(panels));
      loadSavedPanels();
    }
  };

  const openInPanel = (panelId: string | number) => {
    const panelToEdit = savedPanels.find((panel) => panel.id === panelId);
    // console.log(panelToEdit)

    setSelectedPanel(panelToEdit || null);
  };
  const layout = savedPanels.map((panel, index) => ({
    i: panel.id.toString(),
    x: (index * 4) % 12,
    y: Math.floor(index / 3) * 3,
    w: 4,
    h: 4, // Adjusted height to accommodate toggle button
    minH: 4,
    maxH: 4,
  }));

  return (
    <>
      
        <GridLayout
          className="layout"
          layout={layout}
          cols={12}
          rowHeight={130}
          width={1800}
        >
          {savedPanels.map((panel) => (
            <div key={panel.id}>
              <Card>
                <CardHeader>
                  <div className="flex justify-between	">
                    <CardTitle>{panel.name}</CardTitle>
                 
                    <div className="flex">
                      <Button
                        onClick={() => toggleDisplay(panel.id)}
                        style={{ marginRight: 8 }}
                      >
                        {panel.showGraph ? "Show Table" : "Show Graph"}
                      </Button>
                      <Button onClick={() => deletePanel(panel.id)}>
                        Delete
                      </Button>
                      <Button onClick={() => openInPanel(panel.id)}>
                        Edit
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {panel.showGraph ? (
                    <Graph data={panel.data.filteredData || []} />
                  ) : (
                    <h1>table</h1>
                  )}
                </CardContent>
              </Card>
            </div>
          ))}
        </GridLayout>
      
    </>
  );
};

export default Dashboards;
