export default function HelloWorld(props) {
  const { title = 'hello world', changeTitle } = props;
  const handleChangeTitle = () => {
    changeTitle('hello React');
  };
  return (
    <div>
      {title}
      <button onClick={handleChangeTitle}>改变标题</button>
    </div>
  );
}
