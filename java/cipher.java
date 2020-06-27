class challenge {
  static String cipher(String s, int k) {
    String alpha = "abcdefghijklmnopqrstuvwxyz";
    k = k % 26;
    String cipher = alpha.substring(k) + alpha.substring(0, k);
    String answer = "";
    for (int i = 0; i < s.length(); i++) {
      String ch = s.substring(i, i + 1);
      int index = alpha.indexOf(ch.toLowerCase());
      if (index >= 0) {
        if (ch.toUpperCase() == ch) {
          answer += cipher.substring(index, index + 1).toUpperCase();
        } else {
          answer += cipher.substring(index, index + 1);
        }
      } else {
        answer += ch;
      }
    }
    return answer;
  }

  public static void main(String[] args) {
    System.out.println(cipher("middle-Outz", 28));
  }
}
// okffng-Qwvb
// okffng-Owvb