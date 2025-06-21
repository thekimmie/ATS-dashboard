import Head from "next/head";
import picks from "../data/picks.json";

export default function Home() {
  return (
    <>
      <Head>
        <title>ATS Dashboard</title>
      </Head>

      <main className="min-h-screen bg-gray-50 p-6 md:p-12">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
          College Football <span className="text-indigo-600">ATS</span> Dashboard
        </h1>
        <p className="mt-2 text-gray-600">
          Model vs. Market spreads • Updated manually (dummy data)
        </p>

        <div className="mt-8 overflow-x-auto rounded-lg shadow-lg bg-white">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                {[
                  "Home",
                  "Away",
                  "Model",
                  "Market",
                  "Edge",
                  "Conf.",
                  "Weather",
                  "Pick",
                ].map((h) => (
                  <th
                    key={h}
                    className="px-3 py-2 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {picks.map((g) => (
                <tr
                  key={`${g.home}-${g.away}`}
                  className={
                    g.edge > 2
                      ? "bg-green-50"
                      : g.edge < -2
                      ? "bg-red-50"
                      : ""
                  }
                >
                  <td className="px-3 py-2 whitespace-nowrap">{g.home}</td>
                  <td className="px-3 py-2 whitespace-nowrap">{g.away}</td>
                  <td className="px-3 py-2 text-right">{g.model_spread}</td>
                  <td className="px-3 py-2 text-right">{g.market_spread}</td>
                  <td className="px-3 py-2 text-right font-medium">
                    {g.edge.toFixed(1)}
                  </td>
                  <td className="px-3 py-2 text-right">
                    {(g.confidence * 100).toFixed(0)}%
                  </td>
                  <td className="px-3 py-2">{g.weather}</td>
                  <td className="px-3 py-2 font-semibold">{g.pick}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}
