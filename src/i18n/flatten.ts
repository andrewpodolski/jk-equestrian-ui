export function flattenMessages(
  obj: Record<string, unknown>,
  prefix = '',
): Record<string, string> {
  return Object.entries(obj).reduce<Record<string, string>>((acc, [key, value]) => {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      Object.assign(acc, flattenMessages(value as Record<string, unknown>, fullKey));
    } else {
      acc[fullKey] = String(value);
    }
    return acc;
  }, {});
}
