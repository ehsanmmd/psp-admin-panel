export const userHasAccess = (menu: string) => {
  const restrictedMenus = ['Setting'];
  return !restrictedMenus.includes(menu);
};
