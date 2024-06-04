import React from "react";

const StatsAndImage = () => {
  return (
    <div
      className="stats shadow"
      style={{ minWidth: "150vh", paddingBottom: 10, marginRight: 125 }}
    >
      <div className="stat">
        <div className="stat-figure text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-8 h-8 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            ></path>
          </svg>
        </div>
        <div className="stat-title">Total de Investimentos </div>
        <div className="stat-value text-primary">25,6K</div>
        <div className="stat-desc">21% a mais que o mês passado</div>
      </div>

      <div className="stat">
        <div className="stat-figure text-secondary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-8 h-8 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            ></path>
          </svg>
        </div>
        <div className="stat-title">Retorno do Investimento</div>
        <div className="stat-value text-secondary">2,6%</div>
        <div className="stat-desc">21% a mais que o mês passado</div>
      </div>

      <div className="stat">
        <div className="stat-figure text-secondary"></div>
        <div className="stat-value">86%</div>
        <div className="stat-title">Metas de Investimento Alcançadas</div>
        <div className="stat-desc text-secondary">3 metas restantes</div>
      </div>
    </div>
  );
};

export default StatsAndImage;
