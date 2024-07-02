import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const { toast } = useToast();

  const handlePredict = () => {
    toast({
      title: "Prediction",
      description: "Boat speed prediction feature coming soon!",
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
            <Input placeholder="Enter boat parameters" />
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