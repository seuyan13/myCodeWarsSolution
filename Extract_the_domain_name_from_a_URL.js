/*
DESCRIPTION:

Write a function that when given a URL as a string,
parses out just the domain name and returns it as a string
*/

function domainName(url) {
  let regex = /[^\w+-]/g;
  url = url.split(regex).filter((elements) => {
    return (
      elements !== "" &&
      elements !== "http" &&
      elements !== "www" &&
      elements !== "https"
    );
  });

  //console.log(url[0]);
  return url[0];
}
