%--META--%
{
  "genForEach": {
    "file": "sub/%FILE%.html",
    "objKey": "testPages"
  },
  "heck": "heck"
}
%--META--%

(markupData, pageData) => (
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>{ markupData.name }</title>
  </head>
  <body>
    <h1>{ pageData.content }</h1>
  </body>
  </html>
)