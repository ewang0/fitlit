import { expect } from 'chai';
import Hydration from '../src/Hydration';

describe('User hydration data', () => {
  let data;
  let userHydration;

  beforeEach(function() {
    data = [
      {
      "userID": 1,
      "date": "2019/06/15",
      "numOunces": 37
      },
      {
      "userID": 1,
      "date": "2019/06/16",
      "numOunces": 75
      },
      {
      "userID": 1,
      "date": "2019/06/17",
      "numOunces": 69
      },
      {
      "userID": 1,
      "date": "2019/06/18",
      "numOunces": 91
      },
      {
      "userID": 1,
      "date": "2019/06/19",
      "numOunces": 38
      },
      {
      "userID": 1,
      "date": "2019/06/20",
      "numOunces": 79
      },
      {
      "userID": 1,
      "date": "2019/06/21",
      "numOunces": 69
      },
      {
      "userID": 1,
      "date": "2019/06/22",
      "numOunces": 91
      }];

    userHydration = new Hydration(data)
  });

  it("should be a function", function() {
    expect(Hydration).to.be.a("function");
  })

  it("should be an instance of Hydration", function() {
    expect(userHydration).to.be.an.instanceOf(Hydration);
  })

  it("should be able to calculate the user's average daily ounces", function() {
    const userAverage = userHydration.getAvgOunces();
    expect(userAverage).to.equal(68)
  })

  it("should return the number of ounces consumed on a specified day", function() {
    const dayTotal = userHydration.getOuncesByDay("2019/06/16");
    expect(dayTotal).to.equal(75)
  })

  it("return fluid ounces each day for a week", function() {
    const week = useryHydration.getOuncesForRange(["2019/06/16", "2019/06/17",
    "2019/06/18", "2019/06/19", "2019/06/20", "2019/06/21", "2019/06/22"])
    expect(week).to.deep.equal([75, 69, 91, 38, 79, 69, 91])
  })
});
