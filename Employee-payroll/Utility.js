const StringifYdate=(date)=>{
    const options={day:"numeric",month:"short",year:"numeric"};
    const newDate=!date ?"undefined":
        new Date(date.parce(date)).toLocaleDateString("en-Gb", options);
        return newDate;

}