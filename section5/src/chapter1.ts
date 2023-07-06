/**
 * 인터페이스의 확장
 */
interface Animal {
  name: string;
  color: string;
}

interface Dog extends Animal {
  isBark: boolean;
}

const dog: Dog = {
  name: '',
  color: '',
  isBark: true,
};

interface Cat extends Animal {
  isScratch: boolean;
}

interface DogCat extends Dog, Cat {}

const dogCat: DogCat = {
  name: '',
  color: '',
  isBark: true,
  isScratch: true,
};

interface isChicken extends Animal {
  isFly: boolean;
}
