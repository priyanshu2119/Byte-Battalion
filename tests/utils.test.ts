import { describe, it, expect } from 'vitest';
import { slugify, generateDevId, formatDate } from '@/lib/utils';

describe('Utils', () => {
  describe('slugify', () => {
    it('converts text to lowercase slug', () => {
      expect(slugify('Hello World')).toBe('hello-world');
    });

    it('removes special characters', () => {
      expect(slugify('Hello@World!')).toBe('helloworld');
    });

    it('handles multiple spaces', () => {
      expect(slugify('Hello   World')).toBe('hello-world');
    });
  });

  describe('generateDevId', () => {
    it('generates valid Dev ID format', () => {
      const devId = generateDevId('Ankit Sharma');
      expect(devId).toMatch(/^DEV-ankit-\d{4}$/);
    });

    it('handles single name', () => {
      const devId = generateDevId('Ankit');
      expect(devId).toMatch(/^DEV-ankit-\d{4}$/);
    });
  });

  describe('formatDate', () => {
    it('formats date correctly', () => {
      const date = new Date('2024-03-15');
      const formatted = formatDate(date);
      expect(formatted).toMatch(/Mar \d+, 2024/);
    });

    it('handles string dates', () => {
      const formatted = formatDate('2024-03-15');
      expect(formatted).toMatch(/Mar \d+, 2024/);
    });
  });
});
