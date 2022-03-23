import { v4 as uuidv4 } from "uuid";

const keyGenerator = () => {
  return uuidv4();
};

export default keyGenerator;
