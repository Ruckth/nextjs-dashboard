async function delay(ms: number) {
  await new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function Customers() {
  await delay(1000); // 1 second delay
  
  return (
    <div className="w-full">
      <h1 className="text-2xl">Customers</h1>
      <p>This page took 1 second to load.</p>
    </div>
  );
}