export function getMockAstroContext({ dob }) {
    const fakeSigns = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo"];
    const date = new Date(dob);
    return {
      sunSign: fakeSigns[date.getMonth() % 6],
      moonSign: fakeSigns[date.getDate() % 6],
      risingSign: fakeSigns[date.getFullYear() % 6],
    };
  }
  