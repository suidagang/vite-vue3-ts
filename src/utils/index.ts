export function transElIconName(iconName: string): string {
  return 'i' + iconName.replace(/[A-Z]/g, (match) => '-' + match.toLowerCase());
}
