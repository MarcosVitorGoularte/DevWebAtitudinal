"use client"

import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip } from "recharts";

type dadoGraficoRadar = { atitude: string; valor: number };

type designGrafico = {
  dados: dadoGraficoRadar[];
};

export function GraficoRadar({ dados }: designGrafico) {
  return (
      <RadarChart
        style={{
          width: "100%",
          height: "100%",
          maxWidth: "250px",
          aspectRatio: 1,
        }}
        responsive
        data={dados}
        outerRadius="55%"
        className="self-center"
      >
        <PolarGrid gridType="polygon" stroke="#cbd5e1" strokeDasharray="4 4" />

        <PolarAngleAxis
          dataKey="atitude"
          tick={{ fill: "#024a70", fontSize: 13, fontWeight: 600 }}
        />

        <PolarRadiusAxis
          angle={90}
          domain={[0, 5]}
          tickCount={5}
          tick={{ fill: "#94a3b8", fontSize: 11 }}
          axisLine={false}
        />

        <Radar
          dataKey="valor"
          stroke="#1447e6 "
          strokeWidth={1.5}
          fill="#1447e6"
          fillOpacity={0.35}
        />

        <Tooltip
          contentStyle={{
            backgroundColor: "#0f172a",
            border: "none",
            borderRadius: 8,
          }}
          labelStyle={{ color: "#f8fafc", fontWeight: 600 }}
          itemStyle={{ color: "#a5b4fc" }}
        />
      </RadarChart>

  );
}
