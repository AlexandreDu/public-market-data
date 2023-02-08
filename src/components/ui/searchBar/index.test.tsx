import { screen } from '@testing-library/react';
import { render } from '../../../../tests/test-utils';
import user from '@testing-library/user-event';
import { SearchBar } from '.';

describe('Searchbar test', () => {
  const list = ['BTCEUR', 'BTCETH', 'ETHEUR', 'ETHBTC'];
  const mockedHandleSearch = vi.fn();

  it('Searchbar renders a forms and an input', () => {
    render(<SearchBar fullList={list} handleSearch={mockedHandleSearch} />);
    const searchBar = screen.getByRole('form');
    const input = screen.getByRole('textbox');
    expect(searchBar).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  it('should render a list when query matches', async () => {
    render(<SearchBar fullList={list} handleSearch={mockedHandleSearch} />);
    const input = screen.getByRole('textbox');
    await user.click(input);
    await user.keyboard('btceur');
    const autoCompleteList = await screen.findByRole('list');
    expect(autoCompleteList).toBeVisible();
  });

  it('should render one item list on the screen', async () => {
    render(<SearchBar fullList={list} handleSearch={mockedHandleSearch} />);
    const input = screen.getByRole('textbox');
    await user.click(input);
    await user.keyboard('btceur');
    const itemsNumber = (await screen.findAllByRole('listitem')).length;
    expect(itemsNumber).toBe(1);
  });

  it('should render 2 items list on the screen', async () => {
    render(<SearchBar fullList={list} handleSearch={mockedHandleSearch} />);
    const input = screen.getByRole('textbox');
    await user.click(input);
    await user.keyboard('bt');
    const itemsNumber = (await screen.findAllByRole('listitem')).length;
    expect(itemsNumber).toBe(2);
  });

  it('should reset input when click on an item list', async () => {
    render(<SearchBar fullList={list} handleSearch={mockedHandleSearch} />);
    const input = screen.getByRole('textbox') as HTMLInputElement;
    await user.click(input);
    await user.keyboard('bt');
    const autoCompleteItem = screen.getAllByRole('listitem');
    await user.click(autoCompleteItem[0]);
    expect(input.value).toBe('');
  });

  it('should reset input when submitting the form', async () => {
    render(<SearchBar fullList={list} handleSearch={mockedHandleSearch} />);
    const input = screen.getByRole('textbox') as HTMLInputElement;
    await user.click(input);
    await user.keyboard('any writing');
    await user.keyboard('{enter}');
    expect(input.value).toBe('');
  });
});
