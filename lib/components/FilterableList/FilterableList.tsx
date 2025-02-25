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
import { motion, AnimatePresence } from "framer-motion";

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
            <motion.ul
                className={styles.list}
                style={{ margin: `${Spacing.Spacing4}px 0` }}
            >
                <AnimatePresence>
                    {filteredItems.length > 0 ? (
                        filteredItems.map((item, index) => (
                            <motion.li
                                key={findItemId(item) || index}
                                data-testid="listItem"
                                layout
                                initial={false}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                exit={{ opacity: 0, x: -50, scale: 0.9 }}
                                transition={{
                                    duration: 0.3,
                                    type: "tween",
                                    ease: "easeOut",
                                }}
                                style={{ position: "relative" }}
                            >
                                {renderItem(item)}
                            </motion.li>
                        ))
                    ) : (
                        <motion.li
                            data-testid="listItem"
                            className={styles.noResults}
                            style={{ padding: Spacing.Spacing5 }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <Text as={TextTag.Span} styleAs={"Heading4"}>
                                No results found.
                            </Text>
                        </motion.li>
                    )}
                </AnimatePresence>
            </motion.ul>
        </div>
    );
};

export default FilterableList;
