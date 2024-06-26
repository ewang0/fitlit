class SleepRepository {
  constructor(sleepDataSet) {
    this.sleepDataSet = sleepDataSet;
  }

  renderUserSleepData(userID) {
    const userSleepEvents = this.sleepDataSet
      .filter((user) => user.userID === userID)
      .sort((sleepEvent1, sleepEvent2) => {
        const sleepDate1 = new Date(sleepEvent1.date);
        const sleepDate2 = new Date(sleepEvent2.date);
        return sleepDate1 - sleepDate2;
    })
    return userSleepEvents;
  }

  calcAvgHoursSlept(userID) {
    const userSleepEvents = this.renderUserSleepData(userID);
    const totalHoursSlept = userSleepEvents.reduce((accumulator, sleepEvent) => {
      return accumulator + sleepEvent.hoursSlept;
    }, 0);

    return Number((totalHoursSlept / userSleepEvents.length).toFixed(1));
  }

  calcAvgSleepQuality(userID) {
    const userSleepEvents = this.renderUserSleepData(userID);
    const totalSleepQuality = userSleepEvents.reduce((accumulator, sleepEvent) => {
      return accumulator + sleepEvent.sleepQuality;
    }, 0);

    return Number((totalSleepQuality / userSleepEvents.length).toFixed(1));
  }

  renderHoursSleptOnDate(userID, date) {
    const userSleepEvents = this.renderUserSleepData(userID);
    const sleepEventOnDate = userSleepEvents.find((sleepEvent) => {
      return sleepEvent.date === date;
    });
    return sleepEventOnDate.hoursSlept;
  }

  renderSleepQualityOnDate(userID, date) {
    const userSleepEvents = this.renderUserSleepData(userID);
    const sleepEventOnDate = userSleepEvents.find((sleepEvent) => {
      return sleepEvent.date === date;
    });
    return sleepEventOnDate.sleepQuality;
  }

  renderHoursSleptByStartAndEndDate(userID, start, end) {
    const userSleepEvents = this.renderUserSleepData(userID);
    const startDate = new Date(start);
    const endDate = new Date(end);
    const hoursSleptForChosenDays = userSleepEvents
      .filter((sleepEvent) => {
        const sleepDate = new Date(sleepEvent.date);
        return startDate <= sleepDate && sleepDate <= endDate;
      })
      .map((renderedSleepEvent) => {
        return renderedSleepEvent.hoursSlept;
      });
    return hoursSleptForChosenDays;
  }

  renderSleepQualityByStartAndEndDate(userID, start, end) {
    const userSleepEvents = this.renderUserSleepData(userID);
    const startDate = new Date(start);
    const endDate = new Date(end);
    const sleepQualityForChosenDays = userSleepEvents
      .filter((sleepEvent) => {
        const sleepDate = new Date(sleepEvent.date);
        return startDate <= sleepDate && sleepDate <= endDate;
      })
      .map((renderedSleepEvent) => {
        return renderedSleepEvent.sleepQuality;
      });
    return sleepQualityForChosenDays;
  }

  calcAllUsersAvgSleepQuality () {
    const totalSleepQualityAllUsers = this.sleepDataSet.reduce((acc, sleepEvent) => {
      return acc += sleepEvent.sleepQuality;
    }, 0);
    return Number((totalSleepQualityAllUsers / this.sleepDataSet.length).toFixed(1));
  }
}

export default SleepRepository;
