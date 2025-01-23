const Form = () => {
  return (
    <div class="flex justify-center items-center min-h-screen from-cyan-700 to-slate-500">
      <form class="w-full max-w-sm bg-white rounded-lg shadow-md p-6 space-y-4">
        <h2 class="text-lg font-medium text-gray-800">
          Subscribe to our Newsletter
        </h2>

        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            class="mt-1 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="you@example.com"
          />
        </div>

        <button
          type="submit"
          class="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Form;
