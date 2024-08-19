import Team from '../app';

const bestTeam = new Team;
const batman = {name : "Batman"};
const robin = {name : "Robin"};
const catgirl = {name : "Cat"};

test('should add char to team', () => {
  bestTeam.add(batman)
  const result = bestTeam.members.has(batman);

  expect(result).toBe(true);
});

test('should throw err', () => {
  expect(() => bestTeam.add(batman)).toThrow("объект уже существует");
});


test('should add some chars', () => {
  bestTeam.addAll(robin, catgirl)
  const result = bestTeam.members.size;

  expect(result).toBe(3);
});

test('should return Arr', () => {
  const result = bestTeam.toArray();

  expect(result).toEqual([ { name: 'Batman' }, { name: 'Robin' }, { name: 'Cat' } ]);
});
