import { ChildAsFC } from './Child';

const Parent = () => {
  return <ChildAsFC color="red" onClick={() => console.log("click")}>
    sdfiopjsdv
  </ChildAsFC>;
};

export default Parent;