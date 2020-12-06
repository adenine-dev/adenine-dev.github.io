export default (props) => (
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>{props.title}</title>
            <link rel="stylesheet" href="style/style.css" />
        </head>
        <body>
            {props.children}
        </body>
    </html>
)

