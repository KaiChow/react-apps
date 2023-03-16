export const FUNC_RIGHTS = "func_rights";

export function funcRights(rights) {
  return {
    type: FUNC_RIGHTS,
    payload: rights,
  };
}
