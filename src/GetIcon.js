export const getIcon = (weather) => {
    const weatherLC = weather.toLowerCase();
    if (weatherLC.startsWith("cloud")) {
      return 'âī¸';
    } else if (weatherLC === 'rain') {
      return 'đ§ī¸';
    } else if (weatherLC === 'sun') {
      return 'âī¸';
    } else if (weatherLC === 'clear') {
      return 'âī¸'; //'âī¸' "đ" "đ";
    } else if (weatherLC === 'snow') {
      return 'âī¸';
    } else if (weatherLC === 'extreme') {
      return 'đŠī¸';
    }
  };