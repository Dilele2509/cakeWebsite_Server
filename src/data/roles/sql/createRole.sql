INSERT INTO [dbo].[roles]
    (
        [role_name]
    )
VALUES 
    (
        @role_name
    )

SELECT * FROM [dbo].[roles]
WHERE [id]=id