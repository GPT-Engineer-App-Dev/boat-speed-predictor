import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const { toast } = useToast();

  const [boatLength, setBoatLength] = useState("");
  const [hullType, setHullType] = useState("");

  const handlePredict = () => {
    toast({
      title: "Prediction",
      description: `Boat speed prediction feature coming soon! Boat Length: ${boatLength}, Hull Type: ${hullType}`,
    });
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-center text-2xl">Boat Speed Predictor</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Input 
              placeholder="Enter boat length (meters)" 
              value={boatLength}
              onChange={(e) => setBoatLength(e.target.value)}
            />
            <Select onValueChange={setHullType}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select hull type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="displacement">Displacement</SelectItem>
                <SelectItem value="semi-planning">Semi-Planning</SelectItem>
                <SelectItem value="planning">Planning</SelectItem>
              </SelectContent>
            </Select>
            <Button className="w-full" onClick={handlePredict}>
              Predict Speed
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;