import { splitConstants } from '../credentials/CredentialsUtils';

describe('CredentialsUtils', () => {
  describe('splitConstants', () => {
    it('should split constants correctly (trivial case)', () => {
      const input = `
CONSTANT1=value1
CONSTANT2=value2
CONSTANT3=value3
      `.trim();

      const result = splitConstants(input);

      expect(result).toEqual({
        CONSTANT1: 'value1',
        CONSTANT2: 'value2',
        CONSTANT3: 'value3',
      });
    });

    it('should handle empty lines', () => {
      const input = `
CONSTANT1=value1

CONSTANT2=value2
      `.trim();

      const result = splitConstants(input);

      expect(result).toEqual({
        CONSTANT1: 'value1',
        CONSTANT2: 'value2',
      });
    });

    it('should skip lines without "="', () => {
      const input = `
CONSTANT1=value1
INVALID_LINE
CONSTANT2=value2
      `.trim();

      const result = splitConstants(input);

      expect(result).toEqual({
        CONSTANT1: 'value1',
        CONSTANT2: 'value2',
      });
    });

    it('should handle multiple "=" in a line', () => {
      const input = `
CONSTANT1=value=with=equals
CONSTANT2=another=value
      `.trim();
      const result = splitConstants(input);

      expect(result).toEqual({
        CONSTANT1: 'value=with=equals',
        CONSTANT2: 'another=value',
      });
    });

    it('should handle JSON input', () => {
      const input = `
{
  "CONSTANT1": "value1",
  "CONSTANT2": "value2",
  "OBJECT": { "key": "value" }
}
      `.trim();
      const result = splitConstants(input);

      expect(result).toEqual({
        CONSTANT1: 'value1',
        CONSTANT2: 'value2',
        OBJECT: { key: 'value' },
      });
    });

    it('should handle mixed input gracefully', () => {
      const input = `
CONSTANT1=value1
{
  "CONSTANT2": "value2"
}
CONSTANT3=value3
      `.trim();
      const result = splitConstants(input);
      expect(result).toEqual({
        CONSTANT1: 'value1',
        CONSTANT3: 'value3',
      });
    });


  });    
});
