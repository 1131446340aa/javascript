import { reactive } from 'vue';

const myStore = {
	myName: '黄力豪',
	myAge: 23
};

const updateName = (newName: string) => {
	myStore.myName = newName;
};
const updatedAge = (newAge: number) => {
	myStore.myAge = newAge;
};

export default { myStore, updateName, updatedAge };

// export default function(){
// xxxx
// }
