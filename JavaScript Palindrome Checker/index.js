const submitText = () => {
  const sample = document.getElementById("sample").value;

  const charOnlyRegex = /^([^0-9]*)$/;

  const isInvalid = sample === "" || !charOnlyRegex.test(sample);

  if (isInvalid) {
    document.getElementById("result").innerHTML = "Please enter a valid text!";
    return;
  }

  const letters = sample.split("");

  let test = "";

  for (let index = letters.length - 1; index >= 0; index--) {
    test += letters[index];
  }

  let result = "this is not palindrome";

  if (test === sample) {
    result = "this is palindrome";
  }

  document.getElementById("result").innerHTML = result;
};
