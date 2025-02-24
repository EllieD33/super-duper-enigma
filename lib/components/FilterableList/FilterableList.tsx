import React, { ReactElement, useState } from "react";
import styles from "./FilterableList.module.css";
import { ProductCardProps } from "../Cards/ProductCard/ProductCard";
import Text from "../Text/Text";
import { convertToPascalCase } from "../../utils/convertToPascalCase";
import { getNestedProperty } from "../../utils/getNestedProperty";
import { TextTag } from "../../constants/TextTags";
import { Spacing } from "../../constants/Spacings";
import Button from "../Button/Button";
import { FaCheck } from "react-icons/fa";
import { findItemId } from "../../utils/findItemId";

export type filterableComponents = ProductCardProps;

export interface FilterableListProps {
    listItems: filterableComponents[];
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

    const handleFilterClick = (selector: string | null) => {
        setSelectedFilter((prevFilter) =>
            prevFilter === selector ? null : selector
        );
    };

    return (
        <div data-testid={"filterableList"}>
            <div
                role="group"
                aria-label="Filter categories"
                className={styles.filterGroup}
            >
                <Button
                    variant={selectedFilter === null ? "primary" : "tertiary"}
                    buttonText="All"
                    icon={selectedFilter === null ? <FaCheck /> : undefined}
                    ariaPressed={selectedFilter === null}
                    ariaLabel="Show all"
                    onClick={() => handleFilterClick(null)}
                />
                {filterSelectors.map((selector) => (
                    <Button
                        key={selector}
                        variant={
                            selectedFilter === selector ? "primary" : "tertiary"
                        }
                        buttonText={convertToPascalCase(selector)}
                        icon={
                            selectedFilter === selector ? (
                                <FaCheck />
                            ) : undefined
                        }
                        ariaPressed={selectedFilter === selector}
                        ariaLabel={`Show ${selector}`}
                        onClick={() => handleFilterClick(selector)}
                    />
                ))}
            </div>
            <ul
                className={styles.list}
                style={{ margin: `${Spacing.Spacing4}px 0` }}
            >
                {filteredItems.length > 0 ? (
                    filteredItems.map((item, index) => (
                        <li
                            key={findItemId(item) || index}
                            data-testid="listItem"
                        >
                            {renderItem(item)}
                        </li>
                    ))
                ) : (
                    <li data-testid="listItem">
                        <Text as={TextTag.Span}>No results found.</Text>
                    </li>
                )}
            </ul>
        </div>
    );
};

export default FilterableList;
