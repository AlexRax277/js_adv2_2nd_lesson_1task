import mainFoo from '../js/app';

test('basic test', () => {
  mainFoo();
  const newEl = document.createElement('div');
  newEl.className = 'newEl';
  newEl.textContent = 'newEl';
  document.body.appendChild(newEl);
  expect(document.querySelector('.newEl').textContent).toEqual('newEl');
});
