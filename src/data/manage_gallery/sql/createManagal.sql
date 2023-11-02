INSERT INTO [dbo].[manage_gallery]
    (
        [product_id],
        [thumbnail]
    )
VALUES 
    (
        @product_id,
        @thumbnail
    )

SELECT * FROM [dbo].[manage_gallery]
WHERE [id]=id