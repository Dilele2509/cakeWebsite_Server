INSERT INTO [dbo].[category]
    (
        [name]
    )
VALUES 
    (
        @name
    )

SELECT * FROM [dbo].[category]
WHERE [id]=id