const FilterBy = ({ setFilterBy }) => {
    const onChange = (event) => {
        setFilterBy(event.target.value);
      };
    
      return (
        <div className="filterBy">
          <label htmlFor="category">Filter by{" "}</label>
          <select id="category" defaultValue="all" onChange={onChange}>
          <option value="all">All</option>
          <option value="Travel Scale">Travel Scale</option>
          <option value="Travel Adaptor">Travel Adaptor</option>
          <option value="Eye Mask">Eye Mask</option>
          <option value="Pillows">Pillows</option>
        </select>
      </div>
    );
};
    export default FilterBy;