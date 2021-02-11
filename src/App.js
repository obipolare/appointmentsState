import React, { useEffect, useState } from "react";
import Date from "./components/Date";
import Form from "./components/Form";

const App = () => {
  let initialDates = JSON.parse(localStorage.getItem("dates"));

  !initialDates
    ? (initialDates = [])
    : JSON.parse(localStorage.getItem("dates"));

  const [dates, setDates] = useState(initialDates);

  const createDate = (date) => {
    setDates([...dates, date]);
  };

  const handleDelete = (id) => {
    const date = dates.filter((el) => el.id !== id);
    setDates(date);
  };
  console.log(dates);
  const titleOfAppointments =
    dates.length === 0
      ? "There's no appointments!"
      : "Manage your appointments";

  useEffect(() => {
    dates && localStorage.setItem("dates", JSON.stringify(dates));
  }, [dates]);

  return (
    <>
      <h1 className="py-2 text-4xl text-center">Patients!</h1>
      <section className="grid w-11/12 grid-cols-1 gap-2 m-2 mx-auto mt-12 lg:grid-cols-2">
        <article className="">
          <Form createDate={createDate} />
        </article>
        <article className="flex flex-col ">
          <h2 className="text-3xl font-bold text-center uppercase sm:text-4xl">
            {titleOfAppointments}
          </h2>
          <div className="p-4 m-2 bg-gray-800 rounded">
            {dates.map((el) => (
              <Date key={el.id} {...el} handleDelete={handleDelete} />
            ))}
          </div>
        </article>
      </section>
    </>
  );
};

export default App;
