import Star from '../star';
export default function Stars({ count = 0 }) {
  const validRanked: boolean = count <= 5 && count >= 1;
  const starsList = [];
  if (validRanked) {
    for (let i = 0; i < count; i++) {
      starsList.push(<Star />);
    }
  }
  return <ul className='card-body-stars u-clearfix'>{starsList}</ul>;
}
