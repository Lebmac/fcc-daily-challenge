/* 
=== Zodiac Finder ===
=== Source ===
https://www.freecodecamp.org/learn/daily-coding-challenge/2026-01-31

=== Input ===
Given a date string in the format "YYYY-MM-DD", 

=== Output ===
return the zodiac sign for that date using the following chart:

Date Range	Zodiac Sign
March 21 - April 19	"Aries"
April 20 - May 20	"Taurus"
May 21 - June 20	"Gemini"
June 21 - July 22	"Cancer"
July 23 - August 22	"Leo"
August 23 - September 22	"Virgo"
September 23 - October 22	"Libra"
October 23 - November 21	"Scorpio"
November 22 - December 21	"Sagittarius"
December 22 - January 19	"Capricorn"
January 20 - February 18	"Aquarius"
February 19 - March 20	"Pisces"
Zodiac signs are based only on the month and day, you can ignore the year. */

function getSign(dateStr) {
  const [_, m, d] = dateStr.split("-");
  const month = Number(m);
  const day = Number(d);
  
  const zodiac = {
    1: { day: 20, sign: "Capricorn", },
    2: { day: 19, sign: "Aquarius", },
    3: { day: 21, sign: "Pisces", },
    4: { day: 20, sign: "Aries", },
    5: { day: 21, sign: "Taurus", },
    6: { day: 21, sign: "Gemini", },
    7: { day: 23, sign: "Cancer", },
    8: { day: 23, sign: "Leo", },
    9: { day: 23, sign: "Virgo", },
   10: { day: 23, sign: "Libra", },
   11: { day: 22, sign: "Scorpio", },
   12: { day: 22, sign: "Sagittarius", },
  };

  return zodiac[month].day > day ? 
         zodiac[month].sign :
         zodiac[(month % 12) + 1].sign;
}
