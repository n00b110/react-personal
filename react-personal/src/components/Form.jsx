const Form = () => {
  return (
    <div className="bg-gradient-to-l from-cyan-700 to-slate-500 text-white h-screen flex">

        <h1 className="text-4xl font-bold relative top-72 left-72">Wanna connect?</h1>
        <form action="" className=" relative top-72 left-80">
          <label htmlFor="email" className="">Email</label>
          <input type="text" className="mb-3 block text-sm rounded focus:" />
        </form>

    </div>

  );
};

export default Form;
