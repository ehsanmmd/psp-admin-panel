export interface TabsProps {
  items: TabsItem[];
  className?: string;
  handleClick: (item: TabsItem) => void;
  value?: TabsItem;
}

export interface TabsItem {
  label?: string;
  value?: string | number;
}
