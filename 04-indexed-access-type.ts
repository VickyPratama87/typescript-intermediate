type Animal = {
	name: string;
	legs: number;
	ears: boolean;
	skills: {
		run: boolean;
		fly: boolean;
		swim: boolean;
	};
};

type animalSkills = Animal['skills'];
type animalSkills2 = Animal['legs'];
type animalSkills3 = Animal['skills' | 'legs'];
// type animalSkills4 = Animal.skills; // Error: Property 'skills' does not exist on type 'Animal'
