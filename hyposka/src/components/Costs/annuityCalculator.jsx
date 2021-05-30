import React, { useState } from 'react';
import './style.css';

export const AnnuityCalculator = () => {
  const [nrOfMonth, setNrOfMonths] = useState(0);
  const [loanAmount, setLoanAmount] = useState(0);
  const [rate, setRate] = useState(0);
  const [page, setPage] = useState(1);

  const [plan, setPlan] = useState(false);

  const countNrOfMonths = (event) => {
    setNrOfMonths(event.target.value);
  };

  const changeLoanAmount = (event) => {
    setLoanAmount(Number(event.target.value));
  };

  const changeRate = (event) => {
    setRate(event.target.value);
  };

  const pageSize = 36;
  let nrOfPages = Math.floor(nrOfMonth / pageSize);
  if (nrOfMonth % pageSize > 0) {
    nrOfPages++;
  }
  nrOfPages = nrOfPages === 0 ? 1 : nrOfPages;

  const handleClick = (page) => {
    if (page >= 1 && page <= nrOfPages) {
      setPage(page);
    }
  };

  const rows = [];
  const calculations = [];
  const dates = [];
  const now = new Date();
  const actualYear = now.getFullYear();
  const actualMonth = now.getMonth();

  const getHalfMonth = (i) => {
    let date = new Date(actualYear, actualMonth, 15);
    date = new Date(date.setMonth(actualMonth + i));
    const month = date.getMonth();
    const year = date.getFullYear();
    const patnactehoVmesici = `15.${month + 1}.${year}`; // mesice zacinaji od 0, proto se pricita 1
    return patnactehoVmesici;
  };

  const m6 = rate / 1200;
  const m11 = 1 + m6;
  const m12 = Math.pow(m11, -nrOfMonth);
  const m13 = 1 - m12;
  const payment = loanAmount * (m6 / m13);

  const getInterest = (i) => {
    const restOfLoan = calculations[i - 1]
      ? calculations[i - 1].restOfLoan
      : loanAmount;
    const interest = m6 * restOfLoan;
    const umor = payment - interest;
    return {
      interest: interest,
      umor: umor,
      restOfLoan: restOfLoan - umor,
    };
  };

  for (let i = 0; i < nrOfMonth; i++) {
    const calcs = getInterest(i);
    calculations.push(calcs);
    dates.push(getHalfMonth(i));
  }
  const pageItems = calculations.slice((page - 1) * pageSize, page * pageSize);
  const splicedDates = dates.slice((page - 1) * pageSize, page * pageSize);

  for (let c = 0; c < pageItems.length; c++) {
    const calcs = pageItems[c];
    rows.push(
      <tr key={c}>
        <td>{splicedDates[c]}</td>
        <td>{Math.trunc(calcs.interest)}</td>
        <td>{Math.trunc(calcs.umor)}</td>
        <td>{Math.trunc(calcs.restOfLoan)}</td>
      </tr>,
    );
  }

  return (
    <>
      <div className="annuity__input">
        <label>
          Zadej požadovanou výši úvěru
          <input
            type="number"
            min={0}
            onChange={changeLoanAmount}
            value={loanAmount}
          />
        </label>
        <label>
          Zadej úrokovou sazbu hypotéky v %
          <input type="number" min={0} onChange={changeRate} value={rate} />
        </label>
        <label>
          Zadej počet <strong>měsíců</strong> splácení
          <input
            type="number"
            min={0}
            onChange={countNrOfMonths}
            value={nrOfMonth}
          />
        </label>

        <div className="form-costs__container-minimum">
          <strong>Výše splátky nové hypotéky:</strong>
          <p className="form-costs__minimum"> {Math.trunc(payment)}</p>
        </div>

        <button className="annuity__plan" onClick={() => setPlan(!plan)}>
          Zobrazit splátky
        </button>
      </div>

      {plan && (
        <>
          <table>
            <thead>
              <tr>
                <th>měsíc</th>
                <th>úrok</th>
                <th>úmor</th>
                <th>zůstatek úvěru</th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </table>
          <div>
            <span onClick={handleClick.bind(null, page - 1)}>left </span>
            <span onClick={handleClick.bind(null, page + 1)}>right</span>
            <span>Stránka: {page}</span>
            <span>Počet stránek: {nrOfPages}</span>
          </div>
        </>
      )}
    </>
  );
};
