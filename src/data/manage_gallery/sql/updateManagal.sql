UPDATE [dbo].[manage_gallery]
SET [product_id]=@product_id,
    [thumbnail]=@thumbnail
WHERE [id]=@id

SELECT * FROM [dbo].[manage_gallery]
WHERE [id]=@id