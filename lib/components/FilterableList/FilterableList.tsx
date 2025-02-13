import React, { ReactElement, useState } from "react";
import styles from "./FilterableList.module.css";
import ProductCard, {
    ProductCardProps,
} from "../Cards/ProductCard/ProductCard";
import Text from "../Text/Text";
import { convertToPascalCase } from "../../utils/convertToPascalCase";
import { getNestedProperty } from "../../utils/getNestedProperty";

type filterableComponents = {
    ProductCard: ProductCardProps;
};

// inspo: https://dribbble.com/shots/24478424-slothUI-Figma-Design-System-for-Gen-Z-Hotel-Listing-Card-UI

export interface FilterableListProps {
    listItems: any[];
    renderItem: (item: any) => ReactElement;
    filterSelectors: string[];
    filterProperty: string;
}

const FilterableList = ({
    listItems,
    renderItem,
    filterSelectors,
    filterProperty,
}: FilterableListProps): ReactElement => {
    const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

    const filteredItems = selectedFilter
        ? listItems.filter((item) => {
              const filterValue = getNestedProperty(item, filterProperty);
              return Array.isArray(filterValue)
                  ? filterValue.includes(selectedFilter)
                  : filterValue === selectedFilter;
          })
        : listItems;

    return (
        <div data-testid={"filterableList"}>
            <div>
                {filterSelectors.map((selector) => (
                    <button
                        key={selector}
                        onClick={() =>
                            setSelectedFilter(
                                selectedFilter === selector ? null : selector
                            )
                        }
                    >
                        {convertToPascalCase(selector)}
                    </button>
                ))}
                <button onClick={() => setSelectedFilter(null)}>All</button>
            </div>
            <div>
                {filteredItems.length > 0 ? (
                    filteredItems.map((item, index) => (
                        <div key={item.id || index} className={styles.listItem}>
                            {renderItem(item)}
                        </div>
                    ))
                ) : (
                    <Text>No results found.</Text>
                )}
            </div>
        </div>
    );
};

export default FilterableList;
