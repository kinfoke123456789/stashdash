"use client"

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  {
    name: "Jan 1",
    total: 1420,
  },
  {
    name: "Jan 2",
    total: 1620,
  },
  {
    name: "Jan 3",
    total: 1790,
  },
  {
    name: "Jan 4",
    total: 1890,
  },
  {
    name: "Jan 5",
    total: 2390,
  },
  {
    name: "Jan 6",
    total: 2190,
  },
  {
    name: "Jan 7",
    total: 1490,
  },
  {
    name: "Jan 8",
    total: 1890,
  },
  {
    name: "Jan 9",
    total: 2290,
  },
  {
    name: "Jan 10",
    total: 2390,
  },
  {
    name: "Jan 11",
    total: 2490,
  },
  {
    name: "Jan 12",
    total: 2190,
  },
]

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Tooltip formatter={(value: number) => [`$${value}`, "Revenue"]} cursor={{ fill: "rgba(0, 0, 0, 0.05)" }} />
        <Bar dataKey="total" fill="#10b981" radius={[4, 4, 0, 0]} className="fill-emerald-500" />
      </BarChart>
    </ResponsiveContainer>
  )
}

