import Child from "./child";

const Parent = () => {
  const sayHello = (childName) => {
    alert(`Hello, ${childName} how are you ?`);
  };

  return (
    <div>
      <Child sayHello={sayHello} />
    </div>
  );
};

export default Parent;
