import { Progress } from "antd";
import React from "react";

const Analytics = ({ allTransaction }) => {
  // Total Transaction
  const totalTransaction = allTransaction.length;
  const totalIncomeTransaction = allTransaction.filter(
    (transaction) => transaction.type === "income"
  );
  const totalExpenseTransaction = allTransaction.filter(
    (transaction) => transaction.type === "expense"
  );

  const totalIncomePercent =
    (totalIncomeTransaction.length / totalTransaction) * 100;
  const totalExpensePercent =
    (totalExpenseTransaction.length / totalTransaction) * 100;

  // total Turnover
  const totalTurnover = allTransaction.reduce(
    (acc, transaction) => acc + transaction.amount,
    0
  );

  const totalIncomeTurnover = allTransaction
    .filter((transaction) => transaction.type === "income")
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const totalExpenseTurnover = allTransaction
    .filter((transaction) => transaction.type === "expense")
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const totaIncomeTurnoverPercent = (totalIncomeTurnover / totalTurnover) * 100;
  const totaExpenseTurnoverPercent =
    (totalExpenseTurnover / totalTurnover) * 100;

  return (
    <div className="analytics-body">
      <div className="row m-3">
        <div className="col-md-4">
          <div className="card">
            <div className="card-header">
              Total Transaction : {totalTransaction}
            </div>

            <div className="card-body">
              <h5 className="text-success">
                Income : {totalIncomeTransaction.length}
              </h5>
              <h5 className="text-danger">
                Expense : {totalExpenseTransaction.length}
              </h5>
            </div>

            <div>
              <Progress
                type="circle"
                strokeColor={"green"}
                className="mx-2"
                percent={totalIncomePercent.toFixed(0)}
              />
              <Progress
                type="circle"
                strokeColor={"red"}
                className="mx-2"
                percent={totalExpensePercent.toFixed(0)}
              />
            </div>
          </div>
        </div>
{/*  */}
        <div className="col-md-4 mt-2">
          <div className="card">
            <div className="card-header">
              Total Turnover : {totalTurnover}
            </div>

            <div className="card-body">
              <h5 className="text-success">
                Income Turnover : {totalIncomeTurnover}
              </h5>
              <h5 className="text-danger">
                Expense Turnover : {totalExpenseTurnover}
              </h5>
            </div>

            <div>
              <Progress
                type="circle"
                strokeColor={"green"}
                className="mx-2"
                percent={totaIncomeTurnoverPercent.toFixed(0)}
              />
              <Progress
                type="circle"
                strokeColor={"red"}
                className="mx-2"
                percent={totaExpenseTurnoverPercent.toFixed(0)}
              />
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Analytics;
